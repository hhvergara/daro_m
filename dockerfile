FROM python:3.9.5
ENV PYTHONUNBUFFERED=1
COPY requirements.txt .
RUN pip install -r requirements.txt
RUN apt-get update -y
RUN apt-get install i2c-tools -y
RUN apt-get install python-smbus -y
WORKDIR /opt/back_end
COPY . /opt/back_end
CMD python marvel/manage.py runserver 0.0.0.0:8000 