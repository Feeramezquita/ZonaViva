<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

//Incluir la clase DB para interactuar con el Query builder
use Illuminate\Support\Facades\DB;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('item')->insert([
            [
                "id_item" => 1,
                "nombre_item" => "Bocashi",
                "descripcion_item" => "Abono fermentado para enriquecer sustratos para hortalizas y plantas de ornato. Revolver con tierra para macetas y huertos al 20%.",
                "cuota_recuperacion" => 130.00,
                "tipo_item" => "Producto"
            ],
            [
                "id_item" => 2,
                "nombre_item" => "Bocashi",
                "descripcion_item" => "Abono fermentado para enriquecer sustratos para hortalizas y plantas de ornato. Revolver con tierra para macetas y huertos al 20%.",
                "cuota_recuperacion" => 70.00,
                "tipo_item" => "Producto"
            ],
            [
                "id_item" => 3,
                "nombre_item" => "Sustrato jardín",
                "descripcion_item" => "Sustrato natural nutritivo para trasplante de hortalizas y plantas de ornato",
                "cuota_recuperacion" => 80.00,
                "tipo_item" => "Producto"
            ],
            [
                "id_item" => 4,
                "nombre_item" => "Sustrato siembra",
                "descripcion_item" => "Sustrato natural para rellenar almácigos y charolas de siembra, para hacer germinar semillas de hortalizas y plantas de ornato",
                "cuota_recuperacion" => 160.00,
                "tipo_item" => "Producto"
            ],
            [
                "id_item" => 5,
                "nombre_item" => "Sustrato cactáceas",
                "descripcion_item" => "Sustrato natural nutritivo para trasplante de cactáceas y suculentas.",
                "cuota_recuperacion" => 60.00,
                "tipo_item" => "Producto"
            ],
            [
                "id_item" => 6,
                "nombre_item" => "Humus Lombriz Sólido",
                "descripcion_item" => "",
                "cuota_recuperacion" => 80.00,
                "tipo_item" => "Producto"
            ],
            [
                "id_item" => 7,
                "nombre_item" => "Humus Lombriz Líquido",
                "descripcion_item" => "Concentrado líquido nutritivo y natural para fertilizar sustratos, para fortalecer hortalizas y plantas de ornato. Diluir al 10% y aplicar con regadera sobre la tierra o foliar con atomizador.",
                "cuota_recuperacion" => 30.00,
                "tipo_item" => "Producto"
            ],
            [
                "id_item" => 8,
                "nombre_item" => "Pie de Cría E. Foetida",
                "descripcion_item" => "Lombrices en edad reproductiva para elaboración de composta casera con deshechos vegetales.",
                "cuota_recuperacion" => 100,
                "tipo_item" => "Producto"
            ],
            [
                "id_item" => 9,
                "nombre_item" => "Microorganismos liquidos",
                "descripcion_item" => "Concentrado de microorganismos y minerales para fortalecer hortalizas y plantas de ornato. Diluir al 10% en agua y aplicar foliarmente con atomizador o sobre el sustrato con riego habitual.",
                "cuota_recuperacion" => 30,
                "tipo_item" => "Producto"
            ],
            [
                "id_item" => 10,
                "nombre_item" => "Microorganismos sólidos",
                "descripcion_item" => "Concentrado de microorganismos nativos para fortalecer hortalizas y plantas de ornato. Diluir 50 gr en una cubeta de agua y aplicar foliarmente con atomizador o sobre el sustrato con riego habitual.",
                "cuota_recuperacion" => 50.00,
                "tipo_item" => "Producto"
            ],
            [
                "id_item" => 11,
                "nombre_item" => "Fungicida Forefun",
                "descripcion_item" => "Solución foliar, repelente y fungicida. Diluir al 10% y aplicar foliarmente sobre las hojas (haz y envés) con atomizador.",
                "cuota_recuperacion" => 30,
                "tipo_item" => "Producto"
            ],
            [
                "id_item" => 12,
                "nombre_item" => "Repelente Apichi",
                "descripcion_item" => "Insecticida de amplio espectro y repelente de uso preventivo ante plagas. Diluir al 10% y aplicar con atomizador sobre hojas y tallos. ",
                "cuota_recuperacion" => 30,
                "tipo_item" => "Producto"
            ],
            [
                "id_item" => 13,
                "nombre_item" => "Canastas",
                "descripcion_item" => "Variedad de verduras agroecológicas del huerto, depende de la cosecha de la semana.",
                "cuota_recuperacion" => 150,
                "tipo_item" => "Producto"
            ],
            [
                "id_item" => 14,
                "nombre_item" => "Canastas",
                "descripcion_item" => "Variedad de verduras agroecológicas del huerto, depende de la cosecha de la semana.",
                "cuota_recuperacion" => 200,
                "tipo_item" => "Producto"
            ],
            [
                "id_item" => 16,
                "nombre_item" => "Semilla de amaranto ",
                "descripcion_item" => "",
                "cuota_recuperacion" => 20,
                "tipo_item" => "Producto"
            ],
            [
                "id_item" => 22,
                "nombre_item" => "Semilla de cempasúchil",
                "descripcion_item" => "",
                "cuota_recuperacion" => 20,
                "tipo_item" => "Producto"
            ],
            [
                "id_item" => 23,
                "nombre_item" => "Semilla de brócoli",
                "descripcion_item" => "",
                "cuota_recuperacion" => 20,
                "tipo_item" => "Producto"
            ],
            [
                "id_item" => 25,
                "nombre_item" => "Semilla de rábano",
                "descripcion_item" => "",
                "cuota_recuperacion" => 20,
                "tipo_item" => "Producto"
            ],
            [
                "id_item" => 26,
                "nombre_item" => "Semilla de cilantro",
                "descripcion_item" => "",
                "cuota_recuperacion" => 20,
                "tipo_item" => "Producto"
            ],
            [
                "id_item" => 27,
                "nombre_item" => "Kit de semillas",
                "descripcion_item" => "5 sobres con semillas diferentes. La variedad depende de lo que este disponible al momento de compra en el huerto.",
                "cuota_recuperacion" => 100,
                "tipo_item" => "Producto"
            ],
            [
                "id_item" => 28,
                "nombre_item" => "Kit de plántula de hoja",
                "descripcion_item" => "Variedad de plántulas de hoja (lechugas, acelga, etc) La variedad depende de lo que este disponible al momento de compra en el huerto. ",
                "cuota_recuperacion" => 25,
                "tipo_item" => "Producto"
            ],
            [
                "id_item" => 29,
                "nombre_item" => "Kit de plántula de bulbo",
                "descripcion_item" => "",
                "cuota_recuperacion" => 40,
                "tipo_item" => "Producto"
            ],
            [
                "id_item" => 1001,
                "nombre_item" => "Sábado en el huerto",
                "descripcion_item" => "Espacio para niños/as de 4 a 11 años dónde hacemos actividades en el huerto y juegos, todo con un enfoque en educación ambiental y pedagogía Montessori.",
                "cuota_recuperacion" => 800,
                "tipo_item" => "Curso"
            ],
            [
                "id_item" => 1002,
                "nombre_item" => "Yoga",
                "descripcion_item" => "Aprenderemos a realizar posturas corporales que aportan a los músculos firmeza y elasticidad, además de tener control de nuestra respiración para lograrlo.",
                "cuota_recuperacion" => 280,
                "tipo_item" => "Curso"
            ],
            [
                "id_item" => 1003,
                "nombre_item" => "Bioconstrucción con adobes",
                "descripcion_item" => "Conocerás sobre los secretos de como realizar tus adobes de manera sencilla y resistentes. Asi como construir con ellos de forma eficiente y práctica.",
                "cuota_recuperacion" => 300,
                "tipo_item" => "Curso"
            ],
            [
                "id_item" => 1004,
                "nombre_item" => "Huerto en tu casa",
                "descripcion_item" => "Aprenderás sobre: siembra, trasplante, asociación de cultivos, cultivo de temporada y cuidados para tener una siembra exitosa.",
                "cuota_recuperacion" => 300,
                "tipo_item" => "Curso"
            ],
            [
                "id_item" => 1005,
                "nombre_item" => "Cocina en el huerto",
                "descripcion_item" => "Se instruye a los asistente, para que sepan como realizar diferentes productos como mayonesa y salsas de forma artesanal.",
                "cuota_recuperacion" => 300,
                "tipo_item" => "Curso"
            ]
        ]);
    }
}
