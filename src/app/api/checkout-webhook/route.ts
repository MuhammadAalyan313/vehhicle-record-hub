// import { transporter } from "@/lib/email";
// import { stripe } from "@/lib/stripe";
// import { NextResponse } from "next/server";

// export const POST = async (req: Request) => {
//   try {
//     const body = await req.text();
//     const signature = req.headers.get("stripe-signature");

//     if (!signature) {
//       return new Response("Invalid signature", { status: 400 });
//     }

//     const event = await stripe.webhooks.constructEvent(
//       body,
//       signature,
//       process.env.STRIPE_WEBHOOK_SECRET!
//     );

//     if (event.type === "checkout.session.completed") {
//       const curtomerDetail = event.data.object.customer_details;

//       const amount = event.data.object.amount_total! / 100;
//       if (!event.data.object.customer_details?.email) {
//         throw new Error("Missing user email");
//       }
//       await transporter.sendMail({
//         to: process.env.USER_EMAIL,
//         from: process.env.USER_EMAIL,
//         subject: "New Payment Notification",
//         html: `
//         <!DOCTYPE html>
//             <html>
//                 <head>
//                     <title>Payment Invoice</title>
//                     <style>
//                         /* Your CSS styles here */
//                     </style>
//                 </head>
//                 <body>
//                     <h2>Payment Invoice</h2>
//                     <p><strong>Name:</strong> ${curtomerDetail?.name}</p>

//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Email</th>
//                                 <th>Price</th>
//                                 <th>Country</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>${curtomerDetail?.email}</td>
//                                 <td>$${amount}</td>
//                                 <td>$${curtomerDetail?.address?.country}</td>
//                             </tr>
//                         </tbody>
//                         <tfoot>
//                             <tr>
//                                 <td colspan="1"><strong>Total</strong></td>
//                                 <td><strong>$${amount}</strong></td>
//                             </tr>
//                         </tfoot>
//                     </table>

//                     <p>Best regards,</p>
//                     <p>Vehicle Record Hub</p>
//                 </body>
//             </html>
//         `,
//       });
//     }
//     return NextResponse.json({
//       result: "ok",
//       ok: true,
//     });
//   } catch (error) {
//     console.error("ERROR WEBHOOK", error);
//   }
// };
