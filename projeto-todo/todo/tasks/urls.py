from django.urls import path
from . import views

urlpatterns = [
    path('helloworld/', views.helloworld),
    path("", views.tasklist, name='tasklist'),
    path("task/<int:id>",views.taskView, name="task-view"),
    path("newtask/", views.newTask, name="new-task"),
    path("edit/<int:id>", views.editTask, name="edit-task"),
    path("delete/<int:id>", views.deleteTask, name="delete-task"),
    path("check/<int:id>", views.checkTask, name="check-task"),
    path("yourname/<str:name>", views.yourname, name='yourname'),
]