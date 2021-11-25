<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

//Incluir la clase DB para interactuar con el Query builder
use Illuminate\Support\Facades\DB;

class CursoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('curso')->insert([
            [
                "id_item" => 1001,
                "ponente_curso" => "Guías Montessori",
                "presentacion" => "Juan Gálvez, Originario de La Montaña de Guerrero, de madre Na Savi y de padre Me&#39;phaa.
                Licenciado en Psicología (egresado de la Universidad Autónoma de Guerrero) y Guía Montessori desde 2007. Stephany Tondopo, bióloga con una maestría en en Ciencias con la especialidad en biotecnología en plantas. Los últimos cuatro años se desempeñó como Guía Montessori en Comunidad de Adolescentes.",
                "capacidad_curso" => 15,
                "fecha_inicio_curso" => null,
                "fecha_fin_curso" => null,
                "hora_curso" => "10:00:00",
                "duracion_curso" => 240
            ],
            [
                "id_item" => 1002,
                "ponente_curso" => "Maricela",
                "presentacion" => "Instructora con más de 10 años de experiencia, basandose principalmente en la técnica hatha yoga",
                "capacidad_curso" => 10,
                "fecha_inicio_curso" => null,
                "fecha_fin_curso" => null,
                "hora_curso" => "9:00:00",
                "duracion_curso" => null
            ],
            [
                "id_item" => 1003,
                "ponente_curso" => "Joselo ",
                "presentacion" => "Economista y antropólogo social. 8 años de experiencias en huertos ecológicos. Facilitador ambiental en Zona Viva. Encargado del área de regeneración de suelos..",
                "capacidad_curso" => 20,
                "fecha_inicio_curso" => null,
                "fecha_fin_curso" => null,
                "hora_curso" => "10:00:00",
                "duracion_curso" => 240 
            ],
            [
                "id_item" => 1004,
                "ponente_curso" => "Jessi",
                "presentacion" => "Licenciada en horticultura ambiental egresada de la Universidad Autónoma de Querétaro Tallerista en comunidades PESA y para grupos de interés sobre plantas. Experiencia en producción orgánica",
                "capacidad_curso" => 20,
                "fecha_inicio_curso" => null,
                "fecha_fin_curso" => null,
                "hora_curso" => "10:00:00",
                "duracion_curso" => 240
            ],
            [
                "id_item" => 1005,
                "ponente_curso" => "Pedro",
                "presentacion" => "Chef egresado de la universidad Anáhuac",
                "capacidad_curso" => 20,
                "fecha_inicio_curso" => null,
                "fecha_fin_curso" => null,
                "hora_curso" => null,
                "duracion_curso" => null
            ]
        ]);
    }
}
