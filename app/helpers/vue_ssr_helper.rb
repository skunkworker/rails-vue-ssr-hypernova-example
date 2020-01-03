module VueSSRHelper

  def ssr_server_url
    url = "http://0.0.0.0:3030/batch"
  end

  def render_single(component_name, data_hash)
    body = {
      content: {
        name: component_name,
        data: data_hash
      }
    }

    response = HTTParty.post(ssr_server_url, body: body.to_json, headers: {"Content-Type" => 'application/json'})

    return JSON.parse(response.body).dig("results","content","html")
  end

  def render_many(component_name, payloads=[])

    # hypernova has an odd payload format, so we need to make the keys to the hash
    # 0: {}, 1: {}, 2: {} # etc

    body_h = {}

    payloads.each_with_index do |payload, index|
      body_h[index] = {
        name: component_name,
        data: payload
      }
    end

    response = HTTParty.post(ssr_server_url, body: body_h.to_json, headers: {"Content-Type" => 'application/json'})

    return JSON.parse(response.body)["results"].map{|k,v| v["html"]}
  end

  def render_multiple_todo_items(todo_items)
    item_hashes = todo_items.map { |item| TodoItemSerializer.new(item).to_h }

    raw render_many('TodoItem', item_hashes).join("\n")
  end

  def render_single_todo_item(todo_item)
    raw render_single('TodoItem', TodoItemSerializer.new(todo_item).to_h )
  end

  # to speed up SSR we should do this.
  def cached_todo_item(todo_item)
    key = "vuessr::todo_item::#{todo_item.cache_key}"
    puts "key-> #{key}"

    Rails.cache.fetch(key, expires_in: 10.seconds) do
      render_single_todo_item(todo_item)
    end
  end

end