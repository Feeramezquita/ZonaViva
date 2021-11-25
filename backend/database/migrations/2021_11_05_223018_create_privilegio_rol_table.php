<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrivilegioRolTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('privilegio_rol', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_privilegio');
            $table->foreignId('id_rol');

            $table->unique(['id_privilegio','id_rol']);
            $table->foreign('id_privilegio')->references('id_privilegio')->on('privilegio')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('id_rol')->references('id_rol')->on('rol')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('privilegio_rol');
    }
}
