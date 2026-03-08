import { NextRequest, NextResponse } from "next/server";

// request is the request object whose type is NextRequest, 
// which is an extension of the standard Request object with additional Next.js-specific properties and methods.
// It provides information about the incoming HTTP request, such as headers, body, query parameters, and more. You can use this object to access data sent by the client when making a POST request to the /api/v1/signup endpoint.
export async function POST(request: NextRequest) {
    // The line request.json() is used to parse the JSON body of the incoming HTTP request. 
    // It returns a promise that resolves to the parsed JSON data. 
    // The .catch(() => ({})) part is a way to handle any potential errors that might occur during the parsing process. 
    // If the parsing fails (for example, if the request body is not valid JSON), 
    // it will catch the error and return an empty object instead. 
    // This ensures that the code can continue executing without crashing due to a parsing error.
    const data = await request.json().catch(() => ({}));
    console.log("Received signup data:", data);
  return NextResponse.json(
    { message: "Signup successful (not really, this is a mock API)." },
    { status: 201 }
  );
}