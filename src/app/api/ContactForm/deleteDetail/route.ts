import { Contact } from "@/helper/client.contact.modal";
import connectDB from "@/helper/connection";
import { NextRequest, NextResponse } from "next/server";






connectDB()
export async function DELETE(req:NextRequest) {
    try {
        const searchQuery = await req.nextUrl.searchParams;
        const id = await searchQuery.get('id');
        console.log(id) // Default to page 1 if not specified
        const deleteUser = await Contact.findByIdAndDelete(id);
        if(!deleteUser) {
            return NextResponse.json({err: "User not found"},{status: 404})
        }
        return NextResponse.json({message:"User deleted successfully"})
    } catch (error) {
        console.error('Error fetching contact data:', error);
        return NextResponse.json({ error: 'Internal server error' });
    }
}