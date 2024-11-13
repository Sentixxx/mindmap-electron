FROM python:3.11

WORKDIR /backend

COPY . /backend

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8090

CMD ["python", "app.py"]