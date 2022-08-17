from .models import ImageFile
from rest_framework import serializers

class ImageFileSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)
    
    class Meta:
        model = ImageFile
        fields = '__all__'