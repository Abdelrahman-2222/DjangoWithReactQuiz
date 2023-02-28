# from django.shortcuts import render
from rest_framework import generics, pagination
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet

from .models import Quiz, Question, Answer
from .serializers import QuizSerializer, QuestionSerializer, AnswerSerializer
# from rest_framework.authentication import SessionAuthentication, BasicAuthentication
# from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


# from django.contrib.auth import authenticate, login, logout
# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt


# Create your views here.
# CLASS BASED VIEWS
# API Endpoints: The following API endpoints will be available:
# GET /quizzes: Retrieve a list of all quizzes.
# POST /quizzes: Create a new quiz.
# GET /quizzes/{id}: Retrieve a specific quiz by ID.
# PUT /quizzes/{id}: Update a specific quiz by ID.
# DELETE /quizzes/{id}: Delete a specific quiz by ID.
# GET /quizzes/{id}/questions: Retrieve a list of questions for a specific quiz.
# POST /quizzes/{id}/questions: Add a new question to a specific quiz.
# GET /questions/{id}: Retrieve a specific question by ID.
# PUT /questions/{id}: Update a specific question by ID.
# DELETE /questions/{id}: Delete a specific question by ID.
# GET /questions/{id}/answers: Retrieve a list of answers for a specific question.
# POST /questions/{id}/answers: Add a new answer to a specific question.


# @csrf_exempt
# def user_login(request):
#     if request.method == 'POST':
#         username = request.POST.get('username')
#         password = request.POST.get('password')
#         user = authenticate(request, username=username, password=password)
#         if user is not None:
#             login(request, user)
#             return JsonResponse({'token': 'abc123'})
#         else:
#             return JsonResponse({'error': 'Invalid username or password'}, status=401)
#     else:
#         return JsonResponse({'error': 'Invalid method'}, status=405)


# create function based views of Quizlist and QuizRetrieve
# where quiz list will return all the quizzes and quiz retrieve will return a specific quiz,
# but not to html file, but to a json file, as it will connect to React


# 1st way -> FBV
@api_view(['GET'])
def quiz_list_api(request):
    all_jobs = Quiz.objects.all()
    data = QuizSerializer(all_jobs, many=True).data
    return Response({'data': data})


# 2nd way -> CBV
# class QuizListApiView(APIView):
#     def get(self, request):
#         all_jobs = Quiz.objects.all()
#         data = QuizSerializer(all_jobs, many=True).data
#         return Response({'data': data})
#
#
# # 3rd way -> GENERIC CBV
# class QuizListAPIView(ListAPIView):
#     queryset = Quiz.objects.all()
#     serializer_class = QuizSerializer
#
#     def list(self, request, *args, **kwargs):
#         queryset = self.get_queryset()
#         serializer = self.get_serializer(queryset, many=True)
#         return Response({'data': serializer.data})
#
#
# # 4th way -> GENERIC CBV without function list
# class QuizListAPIViews(ListAPIView):
#     queryset = Quiz.objects.all()
#     serializer_class = QuizSerializer
#
#
# # 5th way -> ViewSet
# class QuizViewSet(ModelViewSet):
#     queryset = Quiz.objects.all()
#     serializer_class = QuizSerializer
#
#
# # 6th way -> ViewSet with function list
# class QuizListViewSet(APIView):
#     def list(self, request):
#         all_quizzes = Quiz.objects.all()
#         serializer = QuizSerializer(all_quizzes, many=True)
#         return Response(serializer.data)


@api_view(['GET'])
def quiz_detail_api(request, quiz_id):
    job_detail = Quiz.objects.get(id=quiz_id)
    data = QuizSerializer(job_detail).data
    return Response({'data': data})


# POST /quizzes: Create a new quiz.
class QuizCreate(generics.CreateAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

# the equivalent creation of new quiz for function based view
# @api_view(['POST'])
# def quiz_create_api(request):
#     serializer = QuizSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data, status=201)
#     return Response(serializer.errors, status=400)


# # PUT /quizzes/{id}: Update a specific quiz by ID.
# class QuizUpdate(generics.UpdateAPIView):
#     queryset = Quiz.objects.all()
#     serializer_class = QuizSerializer
#
#
# # DELETE /quizzes/{id}: Delete a specific quiz by ID.
# class QuizDestroy(generics.DestroyAPIView):
#     queryset = Quiz.objects.all()
#     serializer_class = QuizSerializer
#
#
# # GET /quizzes/{id}/questions: Retrieve a list of questions for a specific quiz.
# class QuizQuestionList(generics.ListCreateAPIView):
#     queryset = Question.objects.all()
#     serializer_class = QuestionSerializer
#
#     def get_queryset(self):
#         return Question.objects.filter(quiz=self.kwargs['quiz_id'])
#
#
# # POST /quizzes/{id}/questions: Add a new question to a specific quiz.
# class QuizQuestionCreate(generics.CreateAPIView):
#     queryset = Question.objects.all()
#     serializer_class = QuestionSerializer
#
#
# # GET /questions/{id}: Retrieve a specific question by ID.
# class QuestionRetrieve(generics.RetrieveAPIView):
#     queryset = Question.objects.all()
#     serializer_class = QuestionSerializer
#
#
# # PUT /questions/{id}: Update a specific question by ID.
# class QuestionUpdate(generics.UpdateAPIView):
#     queryset = Question.objects.all()
#     serializer_class = QuestionSerializer
#
#
# # DELETE /questions/{id}: Delete a specific question by ID.
# class QuestionDestroy(generics.DestroyAPIView):
#     queryset = Question.objects.all()
#     serializer_class = QuestionSerializer
#
#
# # GET /questions/{id}/answers: Retrieve a list of answers for a specific question.
# class QuestionAnswerList(generics.ListCreateAPIView):
#     queryset = Answer.objects.all()
#     serializer_class = AnswerSerializer
#
#     def get_queryset(self):
#         return Answer.objects.filter(question=self.kwargs['question_id'])
#
#
# POST /questions/{id}/answers: Add a new answer to a specific question.
class QuestionAnswerCreate(generics.CreateAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
#
#
# # GET /answers/{id}: Retrieve a specific answer by ID.
# class AnswerRetrieve(generics.RetrieveAPIView):
#     queryset = Answer.objects.all()
#     serializer_class = AnswerSerializer
#
#
# # PUT /answers/{id}: Update a specific answer by ID.
# class AnswerUpdate(generics.UpdateAPIView):
#     queryset = Answer.objects.all()
#     serializer_class = AnswerSerializer
#
#
# # DELETE /answers/{id}: Delete a specific answer by ID.
# class AnswerDestroy(generics.DestroyAPIView):
#     queryset = Answer.objects.all()
#     serializer_class = AnswerSerializer


# class QuizList(generics.ListCreateAPIView):
#     # authentication_classes = [SessionAuthentication, BasicAuthentication]
#     # permission_classes = [IsAuthenticated, permissions.IsAuthenticated]
#     queryset = Quiz.objects.all()
#     serializer_class = QuizSerializer
#     pagination_class = pagination.PageNumberPagination
#     pagination_class.page_size = 25
#
#     def get_queryset(self):
#         return Quiz.objects.filter(owner=self.request.user)
#
#     def perform_create(self, serializer):
#         serializer.save(owner=self.request.user)