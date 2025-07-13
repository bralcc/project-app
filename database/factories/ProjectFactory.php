<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
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
            'date' => fake()->dateTimeBetween('now', '+1 year'),
            'status' => fake()->randomElement(['in progress', 'completed', 'pending']),
            'image_path' => fake()->imageUrl(),
            'created_at' => 1,
            'updated_at' => 1
        ];
    }
}
