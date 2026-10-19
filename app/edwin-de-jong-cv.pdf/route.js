import { renderCvPdf } from "@/lib/cv-pdf";

export const dynamic = "force-static";

export async function GET() {
  const pdf = await renderCvPdf();
  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="edwin-de-jong-cv.pdf"',
    },
  });
}
