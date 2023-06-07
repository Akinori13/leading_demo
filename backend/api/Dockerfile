# ビルド用
FROM python:3.11-slim-buster AS builder

# 標準出力のバッファリングを無効化（ログをリアルタイムに表示）
ENV PYTHONUNBUFFERED 1

RUN apt-get update && \
    apt-get install -y gcc libpq-dev

RUN python -m venv /opt/venv

ENV PATH="/opt/venv/bin:$PATH"

WORKDIR /code
COPY requirements.txt .

RUN pip install --upgrade pip && \
    pip install -r requirements.txt

# 実行用
FROM python:3.11-slim-buster As runner

RUN apt-get update && \
    apt-get install -y libpq-dev

COPY --from=builder /opt/venv /opt/venv

WORKDIR /code
COPY . .

ENV PATH="/opt/venv/bin:$PATH"
