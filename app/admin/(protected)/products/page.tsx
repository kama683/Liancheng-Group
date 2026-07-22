"use client";

import { ProductAdminTable } from "@/components/admin/ProductAdminTable";
import { getAllProducts } from "@/lib/catalog";

export default function AdminProductsPage() {
  const products = getAllProducts("ru");

  return (
    <div>
      <h1 className="font-heading text-[28px] font-bold text-heading">Товары</h1>
      <p className="mt-2 text-muted">
        Редактирование названия, описания, характеристик и изображения товара.
        Изменения применяются на сайте сразу.
      </p>

      <div className="mt-8">
        <ProductAdminTable products={products} />
      </div>
    </div>
  );
}
