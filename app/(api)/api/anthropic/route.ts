import Anthropic from "@anthropic-ai/sdk";
import { AnthropicStream, StreamingTextResponse } from "ai";
// import { Retrieval3 } from "../../utils/Retrieval3";
import {constructToolUseSystemPrompt, construct_format_tool_for_claude_prompt} from "../../utils/tools/anthropicToolHelper"

// Create an Anthropic API client (that's edge friendly)
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

// handle web extraction
export async function HandleExtraction(url: string) {
  const extractedContent = "hello world";
  console.log(extractedContent);
  return extractedContent;
}

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: Request) {

  try {
    // // Extract the `prompt` from the body of the request
    const { prompt } = await req.json();
    const { messages: url } = prompt;
    // console.log(url)

    const content = await HandleExtraction(url);
    console.log(content);

    // if streaming without using tools

    // const summaryPrompt = [
    // `Summarize ${content} and provide me the blog outline with the following keys
    // title, introduction,section,tags,conclusion`,
    // ];

    // tool setting
    const tool_name = "blog_outline"
    const tool_description = `Get the blog outline when given a content`
    const parameters = [
      {
        "name": "title",
        "type": "string",
        "description": "The main topic or title of the blog post"
      },
      {
        "name": "introduction",
        "type": "string",
        "description": "Introduction paragraph for the blog post"
      },
      {
        "name": "sections",
        "type": "array",
        "description": "An array of section titles for the blog post"
      },
     
      {
        "name": "tags",
        "type": "string",
        "description": "Comma-separated list of possible tags for the blog post"
      },
      {
        "name": "conclusion",
        "type": "string",
        "description": "Conclusion paragraph for the blog post"
      }
    ];

    // blog outline tool
    const tool = await construct_format_tool_for_claude_prompt(tool_name, tool_description, parameters)
    const system_prompt = await constructToolUseSystemPrompt([tool])
    

    // Ask Claude for a streaming chat completion given the prompt
    // const response = await anthropic.completions.create({
    //   prompt: `Human: ${summaryPrompt}\n\nAssistant:`,
    //   model: "claude-2",
    //   stream: true,
    //   max_tokens_to_sample: 500,
      
    // });

    // Ask Claud to provide chat completions using tool
    const response2 = await anthropic.messages.create({
      model:"claude-2.0",
      max_tokens: 4000,
      stream: true,
      messages: [{
        role: "user",
        content: `Summarize ${content} and provide me the blog outline in JSON format make it readable with spacings`
      }],
      system:system_prompt,
      stop_sequences: ["\n\nHuman:", "\n\nAssistant", "</function_calls>"]
    })

    // const text = response2.content[0].text
    // console.log(text)

    // // Convert the response into a friendly text-stream
    const stream = AnthropicStream(response2)

    // // Respond with the stream
    return new StreamingTextResponse(stream);

    // return new Response(JSON.stringify({text:text}));
    // return new Response(JSON.stringify({url: 'hi'}));
  } catch (error) {
    console.error("Error:", error);
    return new Response(`${error} [ Internal Server Error 500 ]`, { status: 500 });
  }
}
