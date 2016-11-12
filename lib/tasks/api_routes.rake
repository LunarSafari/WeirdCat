
desc 'generate api routes to /src/api_routes.json'
task api_routes: :environment do
  routes = Rails.application.routes.named_routes
  name_path = routes.map do |name, route|
    path = route.instance_eval{@path_formatter}.instance_eval{@parts}.map do |p|
      p.respond_to?(:name) ? p.name.inspect : p
    end.join
    [name, path]
  end.reject{|x| x[0].match /rails/ }

  File.open("#{Rails.root}/src/api_routes.json", 'w') do |f|
    f.write name_path.to_json
  end
  puts "generated /src/api_routes.json"
end
