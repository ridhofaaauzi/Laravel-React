<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $users = User::latest()->get();
        return Inertia::render("Users/Users", ["user" => $user, "users" => $users]);
    }

    public function edit($id)
    {
        $user = auth()->user();
        $userId = User::find($id);
        return Inertia::render("Users/Edit", ["user" => $user, "userId" => $userId]);
    }

    public function update(Request $request)
    {
        $request->validate(
            [
                "name" => "required",
                "email" => "required",
            ]
        );

        $user = User::find($request->id);

        $user->update([
            "name" => $request->name,
            "email" => $request->email,
        ]);

        return to_route("users.index");
    }

    public function destroy($id)
    {
        $user = User::find($id);

        $user->delete();

        return to_route("users.index");
    }
}