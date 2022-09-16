# Require all Ruby files in the core_extensions directory
module URI
  def self.escape(*args)
    URI.encode_www_form_component(*args)
  end
end
