

'use server';
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
    // defaults to process.env["ANTHROPIC_API_KEY"]
    apiKey: process.env.ANTHROPIC_API_KEY,
});

export const AkiraGenerateResponse = async (prompt) => {

      const msg = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20240620",
        max_tokens: 1000,
        temperature: 0,
        messages: [
          {
            "role": "user",
            "content": [
              {
                "type": "text",
                "text": prompt
              }
            ]
          }
        ]
      });
      console.log(msg);
      return msg;
    //   return {"id":"msg_01D4TqUdo6ftTaA7w2Bph1A7","type":"message","role":"assistant","model":"claude-3-5-sonnet-20240620","content":[{"type":"text","text":"Hello! How can I assist you today? Is there anything specific you'd like to talk about or any questions you have?"}],"stop_reason":"end_turn","stop_sequence":null,"usage":{"input_tokens":9,"output_tokens":28}}
};

