// pages/api/contacts.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { Contact } from "@/helper/client.contact.modal";
import connectDB from "@/helper/connection";
import { NextRequest, NextResponse } from 'next/server';
// Connect to MongoDB
connectDB();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
      // const searchQuery = req.nextUrl.searchParams;
      // const page = parseInt(searchQuery.get('page') || '1'); // Default to page 1 if not specified
      // const limit = parseInt(searchQuery.get('limit') || '10'); // Default limit to 10 if not specified

      // Calculate skip value based on page and limit
      // const skip = (page - 1) * limit;

      // Fetch paginated contact data
      const contacts = await Contact.find()
          // .sort({ createdAt: -1 }) // Sort by createdAt in descending order
          // .skip(skip)
          // .limit(limit);

      // Get total count for pagination
      // const totalCount = await Contact.countDocuments();

      // Calculate total number of pages
      // const totalPages = Math.ceil(totalCount / limit);

      return NextResponse.json({
          msg: 'success',
          data: contacts,
          // totalCount,
          // currentPage: page,
          // totalPages, // Include total pages in the response
      });
  } catch (error) {
      console.error('Error fetching contact data:', error);
      return NextResponse.json({ error: 'Internal server error' });
  }
}

