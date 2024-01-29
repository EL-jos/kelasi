<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Teacher extends Model
{
    use HasFactory;
    public $incrementing = false;
    protected $guarded = [];

    protected static function boot()
    {
        parent::boot();

        // Événement "creating" sera déclenché avant la création du modèle
        static::creating(function ($teacher) {
            $teacher->id = (string) Str::uuid();
        });
    }
    public function user()
    {
        return $this->morphOne(User::class, 'userable');
    }
}
