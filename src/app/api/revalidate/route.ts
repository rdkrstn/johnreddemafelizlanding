import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-revalidate-secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const type = body?._type;

    switch (type) {
      case "jdHero":
      case "jdProofMetric":
      case "jdProblemFrame":
      case "jdService":
      case "jdFounder":
      case "jdFaqItem":
      case "jdFooter":
      case "jdScreenshotProof":
        revalidatePath("/");
        break;
      case "jdCaseStudy":
        revalidatePath("/");
        revalidatePath("/case-studies");
        if (body?.slug?.current) {
          revalidatePath(`/case-studies/${body.slug.current}`);
        }
        break;
      case "jdTestimonial":
        revalidatePath("/");
        revalidatePath("/testimonials");
        break;
      default:
        revalidatePath("/");
    }

    return NextResponse.json({ revalidated: true, type });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating", error: String(err) },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Revalidation endpoint ready. Use POST with x-revalidate-secret header.",
  });
}
