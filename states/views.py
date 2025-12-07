from django.shortcuts import render,  get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import State
from .serializers import StateSerializer

@api_view(['GET'])
def state_list(request):
    states = State.objects.order_by('?').all()
    serializer = StateSerializer(states, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def state(request, pk):
    state_obj = get_object_or_404(State, pk=pk)
    serializer = StateSerializer(state_obj)
    return Response(serializer.data)

