import { atom } from 'recoil';

interface atomProps{
    promptValue: string
};

export const promptStore = atom<atomProps>({
    key: 'promptStore',
    default:{
        promptValue: 'Suppose that you are an accountant and you have to device an effective plan to spend on an ad campaign for an organization based on the following factors. Make sure to utilize the the funds in accordance with all the variables and description provided. Give results in form of key value pairs the amount to spend and on what medium respectively as selected by the user as well as a description with points and date wise plan with suggestions. Give final output in the following format and nothing else:- Total Budget: Amount spent per media: Date-wise detailed Plan: (in 2 liner bullet points) Suggestions : (in bullet points) Give output as normal text. Here is all the information- '
    }
})

