<?php

namespace App\Http\Filter;

class TaskFilter extends QueryFilter
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

    public function status($status)
    {
        return $this->builder->where('status', 'like', '%' . $status . '%');
    }

    public function priority($priority)
    {
        return $this->builder->where('priority', 'like', '%' . $priority . '%');
    }

    public function dueDate($dueDate)
    {
        return $this->builder->where('due_date', $dueDate);
    }

    public function image($image)
    {
        return $this->builder->where('image_path', 'like', '%' . $image . '%');
    }

    public function assignedUser($assignedUser)
    {
        return $this->builder->whereHas('assignedUser', function ($query) use ($assignedUser) {
            $query->where('name', 'like', '%' . $assignedUser . '%');
        });
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

    public function project($project)
    {
        return $this->builder->whereHas('project', function ($query) use ($project) {
            $query->where('name', 'like', '%' . $project . '%');
        });
    }
}
