import { GoogleGenerativeAI } from "@google/generative-ai";
import { BARD_MODEL_NAME, GPT_API_KEY } from "../constants";

const getGPTResponse= async(prompttext)=>{
    const genAI = new GoogleGenerativeAI(GPT_API_KEY);
    const model = genAI.getGenerativeModel({ model: BARD_MODEL_NAME });
    const result = await model.generateContent(prompttext);
    const response=result.response.text()
    return response.split(",")
}

export default getGPTResponse;
