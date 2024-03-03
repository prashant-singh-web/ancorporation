
import { Contact } from "@/helper/client.contact.modal";
import connectDB from "@/helper/connection";

import { NextRequest, NextResponse } from "next/server";


connectDB()

export async function POST (NextRequest:any){
    try {
        const {name, email, number,message} = await NextRequest.json();
       if(!name || !email || !number || !message){
        return NextResponse.json({Error : "please provide all required fields"},{status : 400})
       
       }
       const newContact = new Contact({
        name,
        email,
        number,
        message,
      });

      await newContact.save();
      console.log('Contact saved successfully!');

      return NextResponse.json({ msg: 'success', data: newContact});
        
    } catch (error:any) {
        return NextResponse.json({error: "error.message"})
    }
}