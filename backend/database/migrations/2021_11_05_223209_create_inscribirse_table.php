<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInscribirseTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inscribirse', function (Blueprint $table) {
            $table->date('fecha_inscripcion');
            $table->foreignId('id_item');
            $table->foreignId('id_users');
            $table->date('fecha_inicio_registrada');
            $table->date('fecha_fin_registrada');
            $table->time('hora_registrada');
            
            $table->primary('fecha_inscripcion');
            $table->unique(['id_item','id_users']);
            $table->foreign('id_item')->references('id_item')->on('item')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('id_users')->references('id_users')->on('users')->onUpdate('cascade')->onDelete('cascade');
        
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inscribirse');
    }
}
