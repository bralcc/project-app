<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\ProjectResource;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // dd([
        //     'name' => $request->name,
        //     'status' => $request->status,
        //     'user' => $request->user,
        //     'all_params' => $request->all()
        // ]);

        $query = Project::query()->with(['createdBy', 'updatedBy']);

        if ($request->has('name') && $request->name !== '') {
            $query->where('name', 'like', '%' . $request->name . '%');
        }

        if ($request->has('status') && $request->status !== 'All') {
            $query->where('status', 'like', '%' . $request->status . '%');
        }

        if ($request->has('user') && $request->user !== '') {
            $query->whereHas('createdBy', function ($q) use ($request) {
                $q->where('name', 'like', '%' . $request->user . '%');
            });
        }

        $projects = $query->paginate(10)->onEachSide(1);
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
