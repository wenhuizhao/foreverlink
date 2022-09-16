class FeedbackSerializer < ActiveModel::Serializer
  attributes :id, :email, :subject, :message
end
