# Generated by Django 2.0.6 on 2018-08-08 08:26

import django.contrib.postgres.fields.jsonb
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('modelchimp', '0033_experimentcustomobject'),
    ]

    operations = [
        migrations.AlterField(
            model_name='machinelearningmodel',
            name='model_parameters',
            field=django.contrib.postgres.fields.jsonb.JSONField(default={}, null=True),
        ),
    ]
