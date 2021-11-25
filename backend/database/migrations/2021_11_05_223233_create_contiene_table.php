<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContieneTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contiene', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_pedido');
            $table->foreignId('id_item');
            $table->float('precio_item_actual', 7, 2);
            $table->integer('cantidad_comprada');

            $table->unique(['id_pedido','id_item']);
            $table->foreign('id_pedido')->references('id_pedido')->on('pedido')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('id_item')->references('id_item')->on('item')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contiene');
    }
}
