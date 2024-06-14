from django.db import models


class Category(models.Model):
    name_ru = models.CharField(max_length=100, verbose_name='Название на русском')
    name_en = models.CharField(max_length=100, verbose_name='Название на английском')
    name_uz = models.CharField(max_length=100, verbose_name='Название на узбекском')
    img = models.ImageField(upload_to='categories/', verbose_name='Изображение (200x200)')
    description_ru = models.TextField(verbose_name='Описание на русском')
    description_en = models.TextField(verbose_name='Описание на английском')
    description_uz = models.TextField(verbose_name='Описание на узбекском')
    slug = models.SlugField(verbose_name='URL', unique=True, db_index=True, max_length=100)
    has_collections = models.BooleanField(verbose_name='Есть коллекции')

    def __str__(self):
        return self.name_ru

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class Collection(models.Model):
    name_ru = models.CharField(max_length=100, verbose_name='Название на русском')
    name_en = models.CharField(max_length=100, verbose_name='Название на английском')
    name_uz = models.CharField(max_length=100, verbose_name='Название на узбекском')
    slug = models.SlugField(verbose_name='URL', unique=True, db_index=True, max_length=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name='Категория')

    def __str__(self):
        return self.name_ru

    class Meta:
        verbose_name = 'Коллекция'
        verbose_name_plural = 'Коллекции'


class Product(models.Model):
    name_ru = models.CharField(max_length=100, verbose_name='Название на русском')
    name_en = models.CharField(max_length=100, verbose_name='Название на английском')
    name_uz = models.CharField(max_length=100, verbose_name='Название на узбекском')
    slug = models.SlugField(verbose_name='URL', unique=True, db_index=True, max_length=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name='Категория', null=True, blank=True)
    collection = models.ForeignKey(Collection, on_delete=models.CASCADE, verbose_name='Коллекция', null=True, blank=True)

    def __str__(self):
        return self.name_ru

    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'
