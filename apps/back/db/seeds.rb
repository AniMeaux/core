require 'faker'

if !Rails.env.production?
  10.times do
    Animal.create(
      name: Faker::Cat.name,
      description: Faker::Lorem.paragraph(2),
      species: Faker::Cat.breed,
      age: Faker::Number.between(1, 10),
      gender: Faker::Number.between(0, 1),
      category: Faker::Number.between(0, 4),
      status: Faker::Number.between(0, 1)
    )
  end

  10.times do
    Event.create(
      begin_at: Faker::Date.between(Date.today, Date.today + 2.weeks),
      end_at: Faker::Date.between(Date.today, Date.today + 2.weeks),
      name: Faker::Lorem.sentence(2),
      description: Faker::Lorem.paragraph(2),
      event_type: Faker::Number.between(0, 2)
    )
  end

  if !User.exists?(email: 'admin@example.com')
    User.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')
  end
end

  