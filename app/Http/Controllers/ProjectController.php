<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\ProjectResource;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Filter\ProjectFilter;
use App\Traits\ApiResponse;

class ProjectController extends Controller
{

    use ApiResponse;
    /**
     * Display a listing of the resource.
     */
    public function index(ProjectFilter $filter, Request $request)
    {
        $projects = Project::filter($filter)
            ->with('Tasks', 'createdBy', 'updatedBy')
            ->orderBy('id')
            ->paginate(10);
        return Inertia::render('project/index', ["projects" => ProjectResource::collection($projects)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        return Inertia::render('project/edit', [
            'project' => new ProjectResource($project)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        //
    }
}
