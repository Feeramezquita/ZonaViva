<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\Producto;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return Item::select('item.id_item', 'nombre_item', 'cuota_recuperacion', 'num_productos', 'descripcion_item')->join('producto', 'producto.id_item', '=', 'item.id_item')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        $item = new Item;
        $item->nombre_item = $request->input('name');
        $item->cuota_recuperacion = $request->input('price');
        $item->descripcion_item = $request->input('description');




        if ($item->save()) {
            Producto::create([
                'id_item' => $item->id_item,
                'num_productos' => $request->qty,
                'cantidad_producto' => "",
            ]);
            // return response()->json([
            //     'status' => 200,
            //     'message' => '¡Producto añadido!'
            // ]);
        }

        // return response()->json([
        //     'status' => 404,
        //     'message' => 'no es posible'
        // ]);
        // return $request -> all();
    }

    public function edit($id)
    {
        $item = Item::find($id);
        $producto = Producto::find($id);

        if ($item) {
            return response()->json([
                'status' => 200,
                'item' => $item,
                'producto' => ($producto)
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'no es posible'
            ]);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function show(Item $item)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @para m  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        $item = Item::find($id);
        $item->nombre_item = $request->input('name');
        $item->cuota_recuperacion = $request->input('price');
        $item->descripcion_item = $request->input('description');
        $producto = Producto::find($id);
        $producto->num_productos = $request->input('qty');
        $item->update();
        $producto->update();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $item = Item::find($id);
        $item->delete();
    }
}
