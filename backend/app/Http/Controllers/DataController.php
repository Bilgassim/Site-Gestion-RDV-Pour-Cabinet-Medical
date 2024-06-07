<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Data; // Modèle correspondant à ta table dans la base de données

class DataController extends Controller
{
    public function index()
    {
        // Récupérer des données de la base de données
        $data = Data::all();
        return response()->json($data);
    }

    public function store(Request $request)
    {
        // Valider et sauvegarder les données dans la base de données
        $validatedData = $request->validate([
            'field1' => 'required',
            'field2' => 'required',
            // Ajouter des règles de validation pour les champs nécessaires
        ]);

        $data = Data::create($validatedData);
        return response()->json(['success' => true, 'data' => $data]);
    }
}
