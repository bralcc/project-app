<?php

namespace App\Http\Filter;

use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class QueryFilter
{
    protected $builder;
    protected $request;
    protected $direction;

    public function __construct(Request $request)
    {
        $this->request = $request;
        $this->direction = 'asc';
    }

    protected function filter($arr)
    {
        foreach ($arr as $key => $value) {
            if (method_exists($this, $key)) {
                $this->$key($value);
            }
        }

        return $this->builder;
    }

    public function apply(Builder $builder)
    {
        $this->builder = $builder;

        foreach ($this->request->all() as $key => $value) {
            if (method_exists($this, $key)) {
                $this->$key($value);
            }
        }

        return $builder;
    }
}
