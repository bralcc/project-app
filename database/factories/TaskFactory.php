<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->sentence(),
            'description' => fake()->sentence(),
            'due_date' => fake()->dateTimeBetween('now', '+1 year'),
            'status' => fake()->randomElement(['in progress', 'completed', 'pending']),
            'priority' => fake()->randomElement(['low', 'medium', 'high']),
            'image_path' => fake()->imageUrl(),
            'assigned_user_id' => 1,
            'created_by' => 1,
            'updated_by' => 1,
            'project_id' => 1
        ];
    }
}
