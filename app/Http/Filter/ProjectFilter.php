<?php

namespace App\Http\Filter;

class ProjectFilter extends QueryFilter
{

    public function id($id)
    {
        return $this->builder->where('id', $id);
    }

    public function name($name)
    {
        return $this->builder->where('name', 'like', '%' . $name . '%');
    }
    public function description($description)
    {
        return $this->builder->where('description', 'like', '%' . $description . '%');
    }

    public function dueDate($dueDate)
    {
        return $this->builder->where('due_date', $dueDate);
    }

    public function status($status)
    {
        $status = strtolower($status);

        if ($status === 'all' || $status === '') {
            return $this->builder;
        }

        return $this->builder->where('status', $status);
    }

    public function image($image)
    {
        return $this->builder->where('image_path', 'like', '%' . $image . '%');
    }

    public function createdBy($createdBy)
    {
        return $this->builder->whereHas('createdBy', function ($query) use ($createdBy) {
            $query->where('name', 'like', '%' . $createdBy . '%');
        });
    }

    public function updatedBy($updatedBy)
    {
        return $this->builder->whereHas('updatedBy', function ($query) use ($updatedBy) {
            $query->where('name', 'like', '%' . $updatedBy . '%');
        });
    }
}
