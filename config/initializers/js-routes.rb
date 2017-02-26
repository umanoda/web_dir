JSRailsRoutes.configure do |c|
  c.excludes = %r{^/(rails)}
  c.path = Rails.root.join('frontend', 'src', 'utilities', 'rails-routes.js')
end
