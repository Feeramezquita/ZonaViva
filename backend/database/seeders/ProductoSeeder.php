<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

//Incluir la clase DB para interactuar con el Query builder
use Illuminate\Support\Facades\DB;

class ProductoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('producto')->insert([
            ["id_item" => 1, "cantidad_producto" => "Costal 42 Kg", "num_productos" => 3],
            ["id_item" => 2, "cantidad_producto" => "1/2 Costal 21 Kg", "num_productos" => 4],
            ["id_item" => 3, "cantidad_producto" => "Costal 40 Kg", "num_productos" => 10],
            ["id_item" => 4, "cantidad_producto" => "Costal 20 Kg", "num_productos" => 5],
            ["id_item" => 5, "cantidad_producto" => "Costal 20 Kg", "num_productos" => 5],
            ["id_item" => 6, "cantidad_producto" => "Costal 20 Kg", "num_productos" => 7],
            ["id_item" => 7, "cantidad_producto" => "Litro", "num_productos" => 50],
            ["id_item" => 8, "cantidad_producto" => "Bolsa negra grande", "num_productos" => 5],
            ["id_item" => 9, "cantidad_producto" => "Litro", "num_productos" => 50],
            ["id_item" => 10, "cantidad_producto" => "Sobre 250 gr", "num_productos" => 30],
            ["id_item" => 11, "cantidad_producto" => "Litro", "num_productos" => 8],
            ["id_item" => 12, "cantidad_producto" => "Litro", "num_productos" => 8],
            ["id_item" => 13, "cantidad_producto" => "Individual", "num_productos" => 5],
            ["id_item" => 14, "cantidad_producto" => "Media", "num_productos" => 5],
            ["id_item" => 16, "cantidad_producto" => "Sobre", "num_productos" => 15],
            ["id_item" => 22, "cantidad_producto" => "Sobre", "num_productos" => 15],
            ["id_item" => 23, "cantidad_producto" => "Sobre", "num_productos" => 35],
            ["id_item" => 25, "cantidad_producto" => "Sobre", "num_productos" => 10],
            ["id_item" => 26, "cantidad_producto" => "Sobre", "num_productos" => 15],
            ["id_item" => 27, "cantidad_producto" => "5 sobres", "num_productos" => 35],
            ["id_item" => 28, "cantidad_producto" => "5 plantulas", "num_productos" => 15],
            ["id_item" => 29, "cantidad_producto" => "5 plantulas", "num_productos" => 15]
        ]);
    }
}
