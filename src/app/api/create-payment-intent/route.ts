import { STRIPE_SECRET_KEY } from "@/config";
import { NextRequest, NextResponse } from "next/server";
// import { NextRequest } from "next/server";

const stripe = require('stripe')(STRIPE_SECRET_KEY);

export async function POST(request: NextRequest ) {
    try {const { amount } = await request.json();
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount ,
        currency: 'usd',
        // payment_method_types: ['card'],
    });
    console.log("intent",paymentIntent)
    return NextResponse.json(paymentIntent);
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}