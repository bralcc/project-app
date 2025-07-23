<?php

namespace App\Traits;

use Illuminate\Http\Response;

trait ApiResponse
{
    public function successResponse($data = null, $code = Response::HTTP_OK)
    {
        return response()->json($data, $code);
    }
}
