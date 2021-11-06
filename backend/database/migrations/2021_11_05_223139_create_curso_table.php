<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCursoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('curso', function (Blueprint $table) {
            $table->id('id_item');
            $table->string('ponente_curso');
            $table->tinyInteger('capacidad_curso');
            $table->date('fecha_inicio_curso');
            $table->date('fecha_fin_curso');
            $table->time('hora_curso');
            $table->smallInteger('duracion_curso');

            $table->foreign('id_item')->references('id_item')->on('item')
            ->onUpdate('cascade')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('curso');
    }
}
