import postgres from 'postgres';
import { NextResponse } from 'next/server';

const sql = postgres(process.env.POSTGRES_URL_NON_POOLING!, { ssl: 'require' });

async function listInvoices() {
  // نفس الاستعلام بتاع الكورس
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;
  return data; // مكتبة 'postgres' بترجع الصفوف مباشرة
}

export async function GET() {
  try {
    const invoices = await listInvoices();
    // استخدمنا NextResponse عشان ده الأحدث
    return NextResponse.json({ invoices });
  } catch (error) {
    // لو حصل خطأ، رجعه
    return NextResponse.json({ error }, { status: 500 });
  }
}