<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEnvioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('envio', function (Blueprint $table) {
            $table->id('id_envio');
            $table->foreignId('id_pedido');
            $table->float('costo_envio', 7, 2)->default(50);
            $table->string('direccion');
            $table->text('instruccion_especial');

            $table->foreign('id_pedido')->references('id_pedido')->on('pedido')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('envio');
    }
}
