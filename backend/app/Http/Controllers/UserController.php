<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {

        return User::select('users.id_users', 'rol.nombre_rol', 'username', 'nombre_apellido', 'email')->join('rol', 'rol.id_rol', '=', 'users.id_rol')->get();
    }
    public function store(Request $request)
    {
        $user = new User;
        $user->username = $request->input('username');
        $user->nombre_apellido = $request->input('name');
        $user->email = $request->input('email');
        $user->id_rol = $request->input('rol');
        $user->password = $request->input('password');
        $user->save();
    }
    public function edit($id)
    {
        $user = User::find($id);
        if ($user) {
            return response()->json([
                'status' => 200,
                'user' => $user,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'no es posible'
            ]);
        }
    }
    public function update($id, Request $request)
    {
        $user = User::find($id);
        $user->username = $request->input('username');
        $user->nombre_apellido = $request->input('name');
        $user->email = $request->input('email');
        $user->id_rol = $request->input('rol');
        $user->password = $request->input('password');
        $user->update();
    }
    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
    }
}
