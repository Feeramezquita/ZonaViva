<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;
    protected $table = 'producto';
    protected $primaryKey = 'id_item';
    protected $fillable = [
        'id_item',
        'num_productos',
        'cantidad_producto'
    ];
    public $timestamps = false;
}
