from rest_framework import serializers
from .models import Quiz, Question, Answer


class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ('title', 'description', 'time_limit', 'difficulty', 'owner')


class QuestionSerializer(serializers.ModelSerializer):
    """
    Represents an answer to a question.

    Attributes:
        question (Question): The question that this answer is associated with.
        text (str): The text of the answer.
        is_correct (bool): Indicates whether this answer is correct or not.
    """

    class Meta:
        model = Question
        fields = '__all__'


class AnswerSerializer(serializers.ModelSerializer):
    """
    Represents an answer to a question.

    Attributes:
        question (Question): The question that this answer is associated with.
        text (str): The text of the answer.
        is_correct (bool): Indicates whether this answer is correct or not.
    """

    class Meta:
        model = Answer
        fields = '__all__'
