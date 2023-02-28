from django.urls import path
from .views import (quiz_list_api, quiz_detail_api, QuizCreate, QuestionAnswerCreate)
                    # QuizUpdate, QuizDestroy,
                    # QuizQuestionList, QuestionRetrieve, QuestionUpdate, QuestionDestroy,
                    # QuizQuestionCreate, AnswerRetrieve, AnswerUpdate, AnswerDestroy)

urlpatterns = [
    path('', quiz_list_api),
    path('<int:quiz_id>/', quiz_detail_api),
    path('create/', QuizCreate.as_view()),
    # path('<int:quiz_id>/questions/', QuizQuestionList.as_view()),
    path('<int:quiz_id>/questions/<int:question_id>/answers/', QuestionAnswerCreate.as_view()),
    # path('<int:quiz_id>/questions/<int:question_id>/', QuestionRetrieve.as_view()),
    # path('<int:quiz_id>/questions/<int:question_id>/answers/<int:answer_id>/', AnswerRetrieve.as_view()),
    # path('<int:quiz_id>/questions/<int:question_id>/answers/<int:answer_id>/', AnswerUpdate.as_view()),
    # path('<int:quiz_id>/questions/<int:question_id>/answers/<int:answer_id>/', AnswerDestroy.as_view()),
    # path('<int:quiz_id>/questions/<int:question_id>/', QuestionUpdate.as_view()),
    # path('<int:quiz_id>/questions/<int:question_id>/', QuestionDestroy.as_view()),
    # path('<int:quiz_id>/questions/', QuizQuestionCreate.as_view()),
    # path('<int:quiz_id>/', QuizUpdate.as_view()),
    # path('<int:quiz_id>/', QuizDestroy.as_view()),
]
